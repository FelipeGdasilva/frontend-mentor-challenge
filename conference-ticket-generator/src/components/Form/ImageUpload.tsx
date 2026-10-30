import Image from "next/image";

interface ImageUploadProps {
  avatar: string;
  setAvatar: (valor: string) => void;
}

export default function ImageUpload( { avatar, setAvatar}:ImageUploadProps){
    return(
        <div className=" flex flex-col w-full max-w-md mx-auto py-8">
            <span className="py-2">Upload Avatar</span>
            {avatar && (
        <div className="mb-4 flex items-center justify-center">
          <img src={avatar} alt="Preview" className="w-20 h-20 rounded-full object-cover border-2 border-orange-500" />
        </div>
      )}
            <label htmlFor="Avatar"  className=" border-2 border-dashed border-neutral-500  py-8 flex flex-col items-center gap-4 rounded-lg cursor-pointer bg-neutral-500/15">
                <Image src="/assets/images/icon-upload.svg" alt="icon" width={48} height={48} className="border border-neutral-500 rounded-2xl bg-neutral-500/20" />
                <p className="text-center">Drag and drop or click to upload</p>
                <input type="file" className="sr-only" id ="Avatar" accept="image/png, image/jpeg" onChange={(e) => {const file = e.target.files?.[0]; if(file){
                    const imageUrl = URL.createObjectURL(file);
                    setAvatar(imageUrl)
                }}}/>
            </label>
            <div className="flex items-center gap-2">
            <Image src="/assets/images/icon-info.svg" alt="icon" width={20} height={20} className="py-2"/>
            <span className="text-sm text-neutral-400">Upload your photo (JPG or PNG, max size: 500KB).</span>
            </div>
        </div>
    )
}