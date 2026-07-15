"use client";

interface Props {
  image: string;
}

export default function BrandPreview({ image }: Props) {
  return (
    <div className="brand-preview">
      <img src={image} alt="" />
    </div>
  );
}
