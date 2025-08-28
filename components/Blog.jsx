"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PulseLoader } from "react-spinners";

const Blog = ({ setHouseImageLink, setBlogData }) => {
  const [isImageUploading, setIsImgUploading] = useState(false);
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState(null);
  // const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;
  const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    setIsImgUploading(true);
    if (image !== null) {
      const imageFormData = new FormData();
      imageFormData.append("file", image);
      imageFormData.append("upload_preset", "kata-token");
      imageFormData.append("cloud_name", cloudName);

      try {
        fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
          method: "POST",
          body: imageFormData,
        })
          .then((res) => res.json())
          .then((data) => {
            setHouseImageLink(data.secure_url);
            // inserting url into blogData
            setBlogData((preValue) => ({
              ...preValue,
              imgUrl: data.secure_url,
            }));
            // console.log(data);
            if (data.error) {
              setImageError(data?.error?.message);
              setIsImgUploading(false);
            } else {
              setImageError(null);
              setIsImgUploading(false);
            }
          })
          .catch((err) => {
            toast.error(err.message + "try again");
            setIsImgUploading(false);
          });
      } catch (error) {
        console.log(error);
        setIsImgUploading(false);
      }
    } else if (image?.size / 500000 > 5) {
      setImageError("Image size can't exceed 5mb");
      setIsImgUploading(false);
    }
  }, [image]);
  return (
    <div className=" flex flex-col justify-center items-center">
      {/* form data */}
      <form
        method="dialog"
        className="modal-box"
        onSubmit={handleSubmit(handleImageChange)}
      >
        <div className="form-control w-full">
          <input
            type="file"
            id="image-input-2"
            placeholder="Upload images..."
            defaultValue={""}
            className=" hidden"
            // accept="image/*"
            {...register("houseImage", {
              required: true,
            })}
            onChange={(e) => {
              handleImageChange(e);
            }}
          />
          <div className=" w-full md:min-w-[300px] p-3 border border-[#787878] rounded-lg text-[#9ca3af]">
            <label
              htmlFor="image-input-2"
              className=" cursor-pointer block w-full"
            >
              {image ? (
                <p className=" text-textColor">
                  {isImageUploading ? (
                    <div className=" flex justify-center py-1">
                      <PulseLoader
                        color="#5cd183"
                        size={7}
                        margin={4}
                        speedMultiplier={0.6}
                      />
                    </div>
                  ) : (
                    <>{image?.name}</>
                  )}
                </p>
              ) : (
                "Upload images..."
              )}
            </label>
          </div>
          {errors.houseImage && (
            <div
              role="alert"
              className=" flex flex-row items-center gap-2 mt-1"
            >
              <img
                src={errorIcon}
                alt="Last name is requires"
                className="w-5"
              />
              <p className="text-xs text-[#c13515]">This is required</p>
            </div>
          )}
          {imageError === "Unsupported source URL: null" ? (
            ""
          ) : (
            <div
              role="alert"
              className=" flex flex-row items-center gap-2 mt-1"
            >
              <p className="text-xs text-[#c13515]">{imageError}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Blog;
