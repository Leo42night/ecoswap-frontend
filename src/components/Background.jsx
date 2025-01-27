const bgTrashs = ["200", "446", "617", "756", "882", "996", "1096", "1213", "1281", "1346", "1376", "1400"];
const images = bgTrashs.map((bg) => ({
  src: `/bg-sampah/sampah_y8vgvm_c_scale,w_${bg}.png`,
  width: parseInt(bg),
  height: parseInt(bg),
}));

const srcbgTrash = images.map((image) => `${image.src} ${image.width}w`).join(", ");

export default function Background() {
  return (
    <img
      className="fixed h-screen object-cover object-top place-self-start size-full -z-10 bg-neat-50 bg-opacity-50"
      loading="lazy"
      srcSet={srcbgTrash}
      src={images[0].src ? images[0].src : null }
      alt="background sampah"
    />
  );
};
