import React from "react";

const FreeProduct: React.FC = () => {
  const productFeatures = [
    "360 পৃষ্ঠা",
    "প্রিমিয়াম হার্ডকপি",
    "ফ্রি ডেলিভারি",
    "৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি"
  ];


  return (
    <div>
      <h2 className="my-5 text-xl font-semibold leading-[30px] text-black ">
        Free items with this products-
      </h2>

      <div className="relative w-full overflow-hidden bg-no-repeat bg-cover  rounded-[1rem] bg-[url(https://cdn.10minuteschool.com/images/banner_background_1731401239364.png)]">
        <div className="p-4 absolute w-full h-full filter [&>*]:row-[1] [&>*]:col-[1]" style={{ display: "grid", gridTemplateColumns: "1fr" }}>
          <div className="relative w-full h-full opacity-30 rounded-xl"></div>
          <div className="rounded-2xl blur-sm mix-blend-hard-light overflow-hidden relative w-full h-full z-[1] before:contnet-[''] before:border-[6px] before:border-t-0 before:border-b-0 before:blur-[8px] before:absolute before:w-full before:h-full before:rounded-xl before:[border-image:conic-gradient(from_180deg_at_50%_50%,#FFE2BE_0deg,#FFA42D_36.0000005364418deg,#EDAE64_50.40000021457672deg,#8E9AFC_90.12555956840515deg,#67D1FF_102.59999871253967deg,#FFF_126.76394462585449deg,#FCD6F7_144.0000021457672deg,#F3CFFF_156.10909223556519deg,#CCA5F3_180deg,#E0CDF9_227.39765882492065deg,#472FFF_240.4190754890442deg,#479BFF_270deg,#B6E0FF_296.89493894577026deg,#FF8E75_323.99999141693115deg)_1]"></div>
          <div className="relative rounded-xl overflow-hidden w-full h-full z-[1] before:blur-[1.5px] before:absolute before:border before:w-full before:h-full before:contnet-[''] before:mix-blend-hard-light before:[border-image:conic-gradient(from_180deg_at_50%_50%,#FFE2BE_0deg,#FFA42D_36.0000005364418deg,#EDAE64_50.40000021457672deg,#8E9AFC_90.12555956840515deg,#67D1FF_102.59999871253967deg,#FFF_126.76394462585449deg,#FCD6F7_144.0000021457672deg,#F3CFFF_156.10909223556519deg,#CCA5F3_180deg,#E0CDF9_227.39765882492065deg,#472FFF_240.4190754890442deg,#479BFF_270deg,#B6E0FF_296.89493894577026deg,#FF8E75_323.99999141693115deg)_1]"></div>
          <div className="rounded-[1rem] w-full h-full z-[1] border-2 border-white blur-[1px] mix-blend-soft-light"></div>
        </div>
        <div className="text-white divide-y rounded-[1rem] divide-dashed divide-slate-600 p-4 px-10 relative z-[1]">
        <div className="relative flex flex-col items-start justify-between gap-1 px-5 py-5 overflow-hidden      md:flex-row w-full">
              {/* Left Side - Product Details */}
              <div className="text-white">
                <h3 className="mb-2 text-base md:text-xl font-[600px] leading-[26px] text-white">
                  ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)
                </h3>

                <div className="space-y-2">
                  {productFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Book Cover */}
              <div className="z-[1] flex w-full sm:items-center md:mr-5 md:w-fit md:items-end">
                <div className="mx-auto">
                  <img
                    alt="call us"
                    loading="lazy"
                    width={120}
                    height={150}
                    className="mx-auto"
                    src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png?w=120&h=150"
                  />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FreeProduct; 