const picture = require('cat-picture');
const LightningImage = require('lightning-image-poly');
const remote = require('electron').remote;
const fs = require('fs');

function save() {
  remote.getCurrentWindow().webContents.printToPDF({
    portraint: true,
  }, (error, data) => {
    fs.writeFile('annotation.pdf', data, (err) => {
      if (err) alert(`error generating pdf! ${err.message}`);
      else alert('pdf saved!');
    });
  });
}

const src = picture.src;
picture.remove();
const viz = new LightningImage('#visualization', null, [src], { hullAlgorithm: 'convex' });

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 80) save();
});
