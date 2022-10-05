import { FC, useEffect, useState } from "react";
import { separateList } from "./utils/helper";
import { images } from "./utils/images";

interface Props {}

const Gallery: FC<Props> = (props): JSX.Element => {
  const [imageLists, setImages] = useState<any[][]>();

  const onResize = () => {
    const { innerWidth } = window;
    if (innerWidth <= 640) {
      return setImages(separateList(images, 1));
    }

    if (innerWidth <= 768) {
      return setImages(separateList(images, 2));
    }
    setImages(separateList(images, 3));
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    onResize();
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-green-100">
      <div className="flex flex-wrap">
        {imageLists?.map((_, index) => {
          return (
            <div key={index} className="sm:basis-1/2 md:basis-1/3 basis-full">
              {imageLists[index].map(({ src, pos }) => {
                return (
                  <div key={src} className="relative">
                    <p className="absolute bg-blue-400 w-10 h-10 flex items-center justify-center text-xl m-4 rounded text-white">
                      {pos}
                    </p>
                    <img src={src} alt="" className="p-2" />
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* {imageLists.map(({ src, pos }, index) => {
          return (
            <div key={index} className="basis-1/4">
              <div className="relative">
                <p className="absolute bg-blue-400 w-10 h-10 flex items-center justify-center text-xl m-4 rounded text-white">
                  {pos}
                </p>
                <img src={src} alt="" className="p-2" />
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Gallery;
