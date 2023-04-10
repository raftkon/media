import { useRemovePhotoMutation } from "../store";
import { GoTrashcan } from "react-icons/go";

const PhotosListItem = ({ photo }) => {
  const [removePhoto] = useRemovePhotoMutation(``);

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div className="relative cursor-pointer m-2" onClick={handleRemovePhoto}>
      <img src={photo.url} className="h-20 w-20" alt="random" />
      <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:bg-gray-200 hover:opacity-80">
        <GoTrashcan className="text-3xl" />
      </div>
    </div>
  );
};

export default PhotosListItem;
