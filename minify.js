import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {
    await imagemin(['images/*.{jpg,png,webp,jpeg}'], {
        destination: 'output',
        plugins: [
            imageminWebp({ quality: 75 })
        ]
    });

    console.log('Images optimized');
})();
