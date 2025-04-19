import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React, { useRef, useState } from "react";

interface FileUploaderProps {
  onChange: (file: File | null) => void;
  value?: File | null;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onChange, value }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(value?.name || null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setFileName(file.name);
      onChange(file);
    } else {
      alert("Only image files are allowed.");
      setFileName(null);
      onChange(null);
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFileName(null);
    onChange(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div
      className='flex flex-col gap-2 my-2 border-2 border-dashed py-6 px-4 cursor-pointer rounded-[8px] bg-input hover:bg-hover'
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        type='file'
        accept='image/*'
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <button
        type='button'
        className={cn(
          "border-0 p-2 rounded cursor-pointer",
          fileName && "hidden"
        )}
      >
        {!fileName && "Upload Screenshot (JPG/PNG only, Max Size 5MB)"}
      </button>

      {fileName && (
        <div className='flex items-center gap-3 justify-center'>
          <span className='text-base'>{fileName}</span>
          <button
            type='button'
            onClick={handleDelete}
            className='cursor-pointer '
          >
            <X size={22} />
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
