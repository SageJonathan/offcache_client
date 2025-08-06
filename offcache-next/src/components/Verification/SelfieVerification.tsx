import React, { useState, useRef, useEffect } from "react";
// Styles imported globally in _app.tsx

interface VerificationData {
  selfieImage: string;
  documentImage: string;
  documentType: "driver_license" | "passport";
  timestamp: string;
  status: "pending" | "approved" | "rejected";
}

interface SelfieVerificationProps {
  onComplete: (data: VerificationData) => void;
  onCancel: () => void;
}

const SelfieVerification: React.FC<SelfieVerificationProps> = ({
  onComplete,
  onCancel,
}) => {
  const [step, setStep] = useState<"document" | "selfie" | "review">(
    "document"
  );
  const [documentType, setDocumentType] = useState<
    "driver_license" | "passport"
  >("driver_license");
  const [documentImage, setDocumentImage] = useState<string>("");
  const [selfieImage, setSelfieImage] = useState<string>("");
  const [isCapturing, setIsCapturing] = useState(false);
  const [error, setError] = useState<string>("");

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    if (step === "selfie") {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [step]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (err) {
      setError(
        "Unable to access camera. Please ensure camera permissions are granted."
      );
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  const captureSelfie = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0);

        const imageData = canvas.toDataURL("image/jpeg");
        setSelfieImage(imageData);
        setStep("review");
      }
    }
  };

  const handleDocumentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setDocumentImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!documentImage || !selfieImage) {
      setError("Please complete both document and selfie verification.");
      return;
    }

    const verificationData: VerificationData = {
      selfieImage,
      documentImage,
      documentType,
      timestamp: new Date().toISOString(),
      status: "pending",
    };

    onComplete(verificationData);
  };

  const retakeSelfie = () => {
    setSelfieImage("");
    setStep("selfie");
  };

  const retakeDocument = () => {
    setDocumentImage("");
    setStep("document");
  };

  return (
    <div className="selfie-verification">
      <div className="selfie-verification__overlay" onClick={onCancel} />
      <div className="selfie-verification__modal">
        <div className="selfie-verification__header">
          <h2>Identity Verification</h2>
          <button className="selfie-verification__close" onClick={onCancel}>
            ×
          </button>
        </div>

        <div className="selfie-verification__content">
          {step === "document" && (
            <div className="selfie-verification__step">
              <h3>Step 1: Document Verification</h3>
              <p>Please upload a clear photo of your government-issued ID</p>

              <div className="selfie-verification__document-type">
                <label>
                  <input
                    type="radio"
                    value="driver_license"
                    checked={documentType === "driver_license"}
                    onChange={(e) =>
                      setDocumentType(
                        e.target.value as "driver_license" | "passport"
                      )
                    }
                  />
                  Driver's License
                </label>
                <label>
                  <input
                    type="radio"
                    value="passport"
                    checked={documentType === "passport"}
                    onChange={(e) =>
                      setDocumentType(
                        e.target.value as "driver_license" | "passport"
                      )
                    }
                  />
                  Passport
                </label>
              </div>

              <div className="selfie-verification__upload-area">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleDocumentUpload}
                  id="document-upload"
                  className="selfie-verification__file-input"
                />
                <label
                  htmlFor="document-upload"
                  className="selfie-verification__upload-label"
                >
                  {documentImage ? (
                    <div className="selfie-verification__preview">
                      <img src={documentImage} alt="Document preview" />
                      <span>Document uploaded ✓</span>
                    </div>
                  ) : (
                    <div className="selfie-verification__upload-placeholder">
                      <div className="selfie-verification__upload-icon">📄</div>
                      <p>
                        Click to upload{" "}
                        {documentType === "driver_license"
                          ? "Driver's License"
                          : "Passport"}
                      </p>
                      <small>Supported formats: JPG, PNG, PDF</small>
                    </div>
                  )}
                </label>
              </div>

              {documentImage && (
                <button
                  className="selfie-verification__btn selfie-verification__btn--primary"
                  onClick={() => setStep("selfie")}
                >
                  Continue to Selfie
                </button>
              )}
            </div>
          )}

          {step === "selfie" && (
            <div className="selfie-verification__step">
              <h3>Step 2: Selfie Verification</h3>
              <p>Please take a clear photo of your face</p>

              <div className="selfie-verification__camera-container">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="selfie-verification__video"
                />
                <div className="selfie-verification__face-guide">
                  <div className="selfie-verification__face-outline"></div>
                </div>
              </div>

              <div className="selfie-verification__camera-controls">
                <button
                  className="selfie-verification__btn selfie-verification__btn--secondary"
                  onClick={() => setStep("document")}
                >
                  Back
                </button>
                <button
                  className="selfie-verification__btn selfie-verification__btn--primary"
                  onClick={captureSelfie}
                  disabled={isCapturing}
                >
                  {isCapturing ? "Capturing..." : "Take Photo"}
                </button>
              </div>
            </div>
          )}

          {step === "review" && (
            <div className="selfie-verification__step">
              <h3>Step 3: Review & Submit</h3>
              <p>Please review your verification documents before submitting</p>

              <div className="selfie-verification__review-grid">
                <div className="selfie-verification__review-item">
                  <h4>
                    Document (
                    {documentType === "driver_license"
                      ? "Driver's License"
                      : "Passport"}
                    )
                  </h4>
                  <div className="selfie-verification__review-image">
                    <img src={documentImage} alt="Document" />
                    <button
                      className="selfie-verification__retake-btn"
                      onClick={retakeDocument}
                    >
                      Retake
                    </button>
                  </div>
                </div>

                <div className="selfie-verification__review-item">
                  <h4>Selfie</h4>
                  <div className="selfie-verification__review-image">
                    <img src={selfieImage} alt="Selfie" />
                    <button
                      className="selfie-verification__retake-btn"
                      onClick={retakeSelfie}
                    >
                      Retake
                    </button>
                  </div>
                </div>
              </div>

              <div className="selfie-verification__submit-controls">
                <button
                  className="selfie-verification__btn selfie-verification__btn--secondary"
                  onClick={() => setStep("selfie")}
                >
                  Back
                </button>
                <button
                  className="selfie-verification__btn selfie-verification__btn--primary"
                  onClick={handleSubmit}
                >
                  Submit Verification
                </button>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="selfie-verification__error">
            {error}
            <button onClick={() => setError("")}>×</button>
          </div>
        )}

        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
    </div>
  );
};

export default SelfieVerification;
