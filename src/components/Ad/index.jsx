import { useEffect } from "react";
export default () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log({ error });
    }
  }, []);

  return (
    <div className="ad">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_AD_CLIENT}
        data-ad-format="auto"
      />
    </div>
  );
};
