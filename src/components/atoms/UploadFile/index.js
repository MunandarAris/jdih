import { useRef, useState } from "react";
import styles from "./UploadFile.module.css";

function UploadFile({
  label = "",
  onChange = () => {},
  value = "",
  error = "",
  supportsFile = [],
  maxSize = 2,
  name = "",
  required = false,
}) {
  const inputRef = useRef(null);
  const [localError, setLocalError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!supportsFile.includes(file.type)) {
      setLocalError("Format file tidak didukung");
      onChange(null);
      return;
    }

    const maxSizeBytes = maxSize * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      setLocalError(`Ukuran maksimal file ${maxSize}MB`);
      onChange(null);
      return;
    }

    setLocalError("");
    onChange(file);
  };

  const handleRemove = () => {
    onChange(null);
    setLocalError("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const showError = localError || error;

  return (
    <div className={styles["upload-wrapper"]}>
      <label className={styles["upload-label"]}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>

      <div
        className={`${styles["upload-area"]} ${
          showError ? styles["upload-area-error"] : ""
        }`}>
        {value ? (
          <>
            <span className={styles["upload-file-name"]}>{value.name}</span>
            <button
              className={styles["remove-button"]}
              onClick={handleRemove}
              type="button">
              ✕
            </button>
          </>
        ) : (
          <span className={styles["file-info"]}>
            Format Berkas: PDF. Ukuran Maksimal Berkas: {maxSize}mb
          </span>
        )}
        <input
          type="file"
          ref={inputRef}
          name={name}
          onChange={handleFileChange}
          accept={supportsFile.join(",")}
          className={styles["hidden-absolute"]}
        />
      </div>

      {value && (
        <div className={styles["upload-preview"]}>
          <embed
            src={URL.createObjectURL(value)}
            width="100%"
            height="250px"
            type="application/pdf"
          />
        </div>
      )}
      {showError && <div className={styles["error-text"]}>{showError}</div>}

      {value ? (
        <div className={styles["container"]}>
          <button
            type="button"
            className={styles["change-button"]}
            onClick={() => inputRef.current && inputRef.current.click()}>
            Ubah File
          </button>
        </div>
      ) : (
        <button
          type="button"
          className={styles["upload-button"]}
          onClick={() => inputRef.current && inputRef.current.click()}>
          Pilih File
        </button>
      )}
    </div>
  );
}

export default UploadFile;
