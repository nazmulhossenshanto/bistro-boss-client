import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_host_key = import.meta.env.VITE_IMAGE_HOST_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_host_key}`;
const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      // Step 1: Get selected image
      const imageFile = data.image[0];

      // Step 2: Create FormData
      const imageFormData = new FormData();
      imageFormData.append("image", imageFile);

      // Step 3: Upload image to ImgBB
      const res = await axiosPublic.post(image_hosting_api, imageFormData);

      // Step 4: Check upload success
      if (!res.data.success) {
        throw new Error("Image upload failed");
      }

      // Step 5: Get uploaded image URL
      const imageUrl = res.data.data.url;

      // Step 6: Prepare menu item
      const menuItem = {
        name: data.recipeName,
        recipe: data.recipeDetails,
        category: data.category,
        price: Number(data.price),
        image: imageUrl,
      };

      // Step 7: Save item to your backend
      const menuRes = await axiosSecure.post("/menu", menuItem);

      // Step 8: Show success message
      if (menuRes.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Item added successfully!",
          text: `${menuItem.name} has been added to the menu.`,
        });
      }
    } catch (error) {
      console.error("Add item error:", error.response?.data || error.message);

      Swal.fire({
        icon: "error",
        title: "Oops!",
        text:
          error.response?.data?.error ||
          "Failed to add item. Please try again.",
      });
    }
  };

  return (
    <div className="mx-4 my-10 md:mx-10">
      <SectionTitle subHeading="What's new?" heading="ADD AN ITEM" />

      <div className="mx-auto mt-9 max-w-3xl bg-[#f3f3f3] p-6 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Recipe Name */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Recipe name*
            </label>

            <input
              type="text"
              placeholder="Recipe name"
              className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#D1A054]"
              {...register("recipeName", {
                required: "Recipe name is required",
                maxLength: {
                  value: 80,
                  message: "Maximum 80 characters allowed",
                },
              })}
            />

            {errors.recipeName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.recipeName.message}
              </p>
            )}
          </div>

          {/* Category and Price */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Category*
              </label>

              <select
                defaultValue=""
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#D1A054]"
                {...register("category", {
                  required: "Please select a category",
                })}
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>

              {errors.category && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Price */}
            <div>
              <label className="mb-2 block text-sm font-medium">Price*</label>

              <input
                type="number"
                placeholder="Price"
                step="0.01"
                min="0"
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#D1A054]"
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                  min: {
                    value: 0.01,
                    message: "Price must be greater than 0",
                  },
                })}
              />

              {errors.price && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.price.message}
                </p>
              )}
            </div>
          </div>

          {/* Recipe Details */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Recipe Details*
            </label>

            <textarea
              placeholder="Recipe Details"
              rows={7}
              className="w-full resize-y rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#D1A054]"
              {...register("recipeDetails", {
                required: "Recipe details are required",
                maxLength: {
                  value: 1000,
                  message: "Maximum 1000 characters allowed",
                },
              })}
            />

            {errors.recipeDetails && (
              <p className="mt-1 text-sm text-red-500">
                {errors.recipeDetails.message}
              </p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <input
              type="file"
              accept="image/*"
              className="block w-full cursor-pointer text-sm text-gray-600 file:mr-3 file:cursor-pointer file:border-0 file:bg-[#e7e7e7] file:px-4 file:py-2 file:text-sm hover:file:bg-gray-200"
              {...register("image", {
                required: "Please select an image",
              })}
            />

            {errors.image && (
              <p className="mt-1 text-sm text-red-500">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-linear-to-r from-[#835D1C] to-[#B58130] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Add Item
            <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
