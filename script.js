function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./male0001.png
     ./male0002.png
     ./male0003.png
     ./male0004.png
     ./male0005.png
     ./male0006.png
     ./male0007.png
     ./male0008.png
     ./male0009.png
     ./male0010.png
     ./male0011.png
     ./male0012.png
     ./male0013.png
     ./male0014.png
     ./male0015.png
     ./male0016.png
     ./male0017.png
     ./male0018.png
     ./male0019.png
     ./male0020.png
     ./male0021.png
     ./male0022.png
     ./male0023.png
     ./male0024.png
     ./male0025.png
     ./male0026.png
     ./male0027.png
     ./male0028.png
     ./male0029.png
     ./male0030.png
     ./male0031.png
     ./male0032.png
     ./male0033.png
     ./male0034.png
     ./male0035.png
     ./male0036.png
     ./male0037.png
     ./male0038.png
     ./male0039.png
     ./male0040.png
     ./male0041.png
     ./male0042.png
     ./male0043.png
     ./male0044.png
     ./male0045.png
     ./male0046.png
     ./male0047.png
     ./male0048.png
     ./male0049.png
     ./male0050.png
     ./male0051.png
     ./male0052.png
     ./male0053.png
     ./male0054.png
     ./male0055.png
     ./male0056.png
     ./male0057.png
     ./male0058.png
     ./male0059.png
     ./male0060.png
     ./male0061.png
     ./male0062.png
     ./male0063.png
     ./male0064.png
     ./male0065.png
     ./male0066.png
     ./male0067.png
     ./male0068.png
     ./male0069.png
     ./male0070.png
     ./male0071.png
     ./male0072.png
     ./male0073.png
     ./male0074.png
     ./male0075.png
     ./male0076.png
     ./male0077.png
     ./male0078.png
     ./male0079.png
     ./male0080.png
     ./male0081.png
     ./male0082.png
     ./male0083.png
     ./male0084.png
     ./male0085.png
     ./male0086.png
     ./male0087.png
     ./male0088.png
     ./male0089.png
     ./male0090.png
     ./male0091.png
     ./male0092.png
     ./male0093.png
     ./male0094.png
     ./male0095.png
     ./male0096.png
     ./male0097.png
     ./male0098.png
     ./male0099.png
     ./male0100.png
     ./male0101.png
     ./male0102.png
     ./male0103.png
     ./male0104.png
     ./male0105.png
     ./male0106.png
     ./male0107.png
     ./male0108.png
     ./male0109.png
     ./male0110.png
     ./male0111.png
     ./male0112.png
     ./male0113.png
     ./male0114.png
     ./male0115.png
     ./male0116.png
     ./male0117.png
     ./male0118.png
     ./male0119.png
     ./male0120.png
     ./male0121.png
     ./male0122.png
     ./male0123.png
     ./male0124.png
     ./male0125.png
     ./male0126.png
     ./male0127.png
     ./male0128.png
     ./male0129.png
     ./male0130.png
     ./male0131.png
     ./male0132.png
     ./male0133.png
     ./male0134.png
     ./male0135.png
     ./male0136.png
     ./male0137.png
     ./male0138.png
     ./male0139.png
     ./male0140.png
     ./male0141.png
     ./male0142.png
     ./male0143.png
     ./male0144.png
     ./male0145.png
     ./male0146.png
     ./male0147.png
     ./male0148.png
     ./male0149.png
     ./male0150.png
     ./male0151.png
     ./male0152.png
     ./male0153.png
     ./male0154.png
     ./male0155.png
     ./male0156.png
     ./male0157.png
     ./male0158.png
     ./male0159.png
     ./male0160.png
     ./male0161.png
     ./male0162.png
     ./male0163.png
     ./male0164.png
     ./male0165.png
     ./male0166.png
     ./male0167.png
     ./male0168.png
     ./male0169.png
     ./male0170.png
     ./male0171.png
     ./male0172.png
     ./male0173.png
     ./male0174.png
     ./male0175.png
     ./male0176.png
     ./male0177.png
     ./male0178.png
     ./male0179.png
     ./male0180.png
     ./male0181.png
     ./male0182.png
     ./male0183.png
     ./male0184.png
     ./male0185.png
     ./male0186.png
     ./male0187.png
     ./male0188.png
     ./male0189.png
     ./male0190.png
     ./male0191.png
     ./male0192.png
     ./male0193.png
     ./male0194.png
     ./male0195.png
     ./male0196.png
     ./male0197.png
     ./male0198.png
     ./male0199.png
     ./male0200.png
     ./male0201.png
     ./male0202.png
     ./male0203.png
     ./male0204.png
     ./male0205.png
     ./male0206.png
     ./male0207.png
     ./male0208.png
     ./male0209.png
     ./male0210.png
     ./male0211.png
     ./male0212.png
     ./male0213.png
     ./male0214.png
     ./male0215.png
     ./male0216.png
     ./male0217.png
     ./male0218.png
     ./male0219.png
     ./male0220.png
     ./male0221.png
     ./male0222.png
     ./male0223.png
     ./male0224.png
     ./male0225.png
     ./male0226.png
     ./male0227.png
     ./male0228.png
     ./male0229.png
     ./male0230.png
     ./male0231.png
     ./male0232.png
     ./male0233.png
     ./male0234.png
     ./male0235.png
     ./male0236.png
     ./male0237.png
     ./male0238.png
     ./male0239.png
     ./male0240.png
     ./male0241.png
     ./male0242.png
     ./male0243.png
     ./male0244.png
     ./male0245.png
     ./male0246.png
     ./male0247.png
     ./male0248.png
     ./male0249.png
     ./male0250.png
     ./male0251.png
     ./male0252.png
     ./male0253.png
     ./male0254.png
     ./male0255.png
     ./male0256.png
     ./male0257.png
     ./male0258.png
     ./male0259.png
     ./male0260.png
     ./male0261.png
     ./male0262.png
     ./male0263.png
     ./male0264.png
     ./male0265.png
     ./male0266.png
     ./male0267.png
     ./male0268.png
     ./male0269.png
     ./male0270.png
     ./male0271.png
     ./male0272.png
     ./male0273.png
     ./male0274.png
     ./male0275.png
     ./male0276.png
     ./male0277.png
     ./male0278.png
     ./male0279.png
     ./male0280.png
     ./male0281.png
     ./male0282.png
     ./male0283.png
     ./male0284.png
     ./male0285.png
     ./male0286.png
     ./male0287.png
     ./male0288.png
     ./male0289.png
     ./male0290.png
     ./male0291.png
     ./male0292.png
     ./male0293.png
     ./male0294.png
     ./male0295.png
     ./male0296.png
     ./male0297.png
     ./male0298.png
     ./male0299.png
     ./male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})



// ─────────────────────────────────────────────────────────────
//  TECHSTACK BALLS — exact replica of video
//  Pure white/pearl 3D spheres with real tech logos
//  Uses Three.js r128 + canvas textures
//  Drop-in: <script src="three.min.js"></script>
//           <script src="techstack-balls-v2.js"></script>
//           <script>initTechBalls()</script>
// ─────────────────────────────────────────────────────────────

function initTechBalls(canvasId) {

  // ── TECH DATA — exactly the ones visible in video ──
  const TECHS = [
    { name:'JavaScript', abbr:'JS',       bg:'#f0db4f', fg:'#000000', font:'900 italic' },
    { name:'TypeScript', abbr:'TS',       bg:'#3178c6', fg:'#ffffff', font:'900' },
    { name:'React',      abbr:'React',    bg:'#61dafb', fg:'#1a1a2e', font:'700' },
    { name:'Next.js',    abbr:'NEXT',     bg:'#ffffff', fg:'#000000', font:'900' },
    { name:'Node.js',    abbr:'Node',     bg:'#5fa04e', fg:'#ffffff', font:'700' },
    { name:'MongoDB',    abbr:'mongo',    bg:'#ffffff', fg:'#13aa52', font:'400 italic' },
    { name:'MySQL',      abbr:'SQL',      bg:'#ffffff', fg:'#00758f', font:'700 italic' },
    { name:'Python',     abbr:'Py',       bg:'#f7c948', fg:'#1a1a2e', font:'900' },
    { name:'Express',    abbr:'Ex',       bg:'#ffffff', fg:'#222222', font:'300' },
    { name:'Tailwind',   abbr:'Tw',       bg:'#38bdf8', fg:'#ffffff', font:'700' },
    { name:'React Native',abbr:'RN',      bg:'#61dafb', fg:'#1a1a2e', font:'700' },
    { name:'PHP',        abbr:'php',      bg:'#8993be', fg:'#ffffff', font:'700 italic' },
    { name:'Git',        abbr:'Git',      bg:'#f05033', fg:'#ffffff', font:'700' },
    { name:'TensorFlow', abbr:'TF',       bg:'#ff6f00', fg:'#ffffff', font:'900' },
    { name:'GSAP',       abbr:'GSAP',     bg:'#88ce02', fg:'#000000', font:'900' },
    { name:'Figma',      abbr:'Fig',      bg:'#f24e1e', fg:'#ffffff', font:'700' },
    { name:'Expo',       abbr:'Expo',     bg:'#ffffff', fg:'#000020', font:'300' },
    { name:'Three.js',   abbr:'3js',      bg:'#ffffff', fg:'#000000', font:'700' },
  ];

  // ── BUILD CANVAS TEXTURE for each ball ──
  // Exactly like in video: white/pearl sphere, logo printed large
  function makeTexture(tech) {
    const sz = 512;
    const cv = document.createElement('canvas');
    cv.width = sz; cv.height = sz;
    const c  = cv.getContext('2d');
    const cx = sz / 2, cy = sz / 2, r = sz / 2;

    // ── 1. WHITE PEARL BASE — exactly like video ──
    // The balls in the video are pure white/off-white with 3D shading
    const base = c.createRadialGradient(cx - r*.28, cy - r*.3, r*.02, cx + r*.08, cy + r*.08, r*1.05);
    base.addColorStop(0,    '#ffffff');
    base.addColorStop(0.3,  '#f8f9fc');
    base.addColorStop(0.65, '#e8ecf5');
    base.addColorStop(0.88, '#c8cee0');
    base.addColorStop(1,    '#a0a8c0');
    c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2);
    c.fillStyle = base; c.fill();

    // ── 2. COLOURED LOGO PATCH — the branded section ──
    // In the video: JS has yellow patch, TS has blue, React has cyan etc.
    // It occupies roughly bottom-left to center of the ball
    c.save();
    c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.clip();

    if (tech.bg !== '#ffffff') {
      // Coloured patch — radial from bottom-left like in video
      const patch = c.createRadialGradient(cx - r*.2, cy + r*.2, 0, cx - r*.1, cy + r*.1, r * 1.1);
      patch.addColorStop(0,   tech.bg + 'ff');
      patch.addColorStop(0.5, tech.bg + 'cc');
      patch.addColorStop(0.8, tech.bg + '55');
      patch.addColorStop(1,   tech.bg + '00');
      c.fillStyle = patch;
      c.fillRect(0, 0, sz, sz);
    }
    c.restore();

    // ── 3. AMBIENT OCCLUSION (dark edges bottom/sides) ──
    c.save();
    c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.clip();
    const ao = c.createRadialGradient(cx, cy, r * .35, cx, cy, r);
    ao.addColorStop(0,   'rgba(0,0,0,0)');
    ao.addColorStop(0.75,'rgba(0,0,0,0.04)');
    ao.addColorStop(1,   'rgba(0,0,0,0.45)');
    c.fillStyle = ao; c.fillRect(0, 0, sz, sz);
    c.restore();

    // ── 4. TOP SPECULAR HIGHLIGHT — big bright spot ──
    c.save();
    c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.clip();
    const spec = c.createRadialGradient(cx - r*.3, cy - r*.35, 0, cx - r*.2, cy - r*.2, r * .58);
    spec.addColorStop(0,   'rgba(255,255,255,1)');
    spec.addColorStop(0.25,'rgba(255,255,255,0.75)');
    spec.addColorStop(0.6, 'rgba(255,255,255,0.2)');
    spec.addColorStop(1,   'rgba(255,255,255,0)');
    c.fillStyle = spec; c.fillRect(0, 0, sz, sz);
    c.restore();

    // ── 5. SECONDARY SMALL GLINT ──
    c.save();
    c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.clip();
    const g2 = c.createRadialGradient(cx + r*.35, cy - r*.38, 0, cx + r*.35, cy - r*.38, r * .2);
    g2.addColorStop(0, 'rgba(255,255,255,0.7)');
    g2.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g2; c.fillRect(0, 0, sz, sz);
    c.restore();

    // ── 6. TECH LABEL — large, like in video ──
    c.save();
    c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.clip();

    const label = tech.abbr;
    // font size scales with label length — shorter = bigger
    const fs = Math.round(sz * (label.length <= 2 ? 0.28 : label.length <= 4 ? 0.22 : 0.18));

    c.font         = `${tech.font} ${fs}px Arial, sans-serif`;
    c.textAlign    = 'center';
    c.textBaseline = 'middle';
    // text color — use fg, but also add shadow for depth
    c.shadowColor  = 'rgba(0,0,0,0.3)';
    c.shadowBlur   = 8;
    c.shadowOffsetX = 2;
    c.shadowOffsetY = 3;
    c.fillStyle    = tech.fg;
    // draw text slightly off-center (lower-right bias like in video)
    c.fillText(label, cx + sz*.04, cy + sz*.06);
    c.restore();

    return cv;
  }

  // ── THREE.JS SETUP ──
  const section = document.getElementById('techstack');
  if (!section) { console.error('No #techstack element found'); return; }

  // Create canvas if not provided
  let canvas = canvasId
    ? document.getElementById(canvasId)
    : document.getElementById('ts-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.style.cssText = 'width:100%;height:600px;display:block;';
    section.appendChild(canvas);
  }

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0); // transparent — bg comes from CSS

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 2, 0.1, 200);
  camera.position.z = 28;

  // ── LIGHTING — key for that white/pearl 3D look ──
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));

  // Main key light (top-left front — creates the big specular)
  const key = new THREE.DirectionalLight(0xffffff, 1.4);
  key.position.set(-5, 8, 12); scene.add(key);

  // Fill light (right, softer)
  const fill = new THREE.DirectionalLight(0xe8eeff, 0.5);
  fill.position.set(8, -2, 8); scene.add(fill);

  // Rim light from behind (gives edge definition like in video)
  const rim = new THREE.DirectionalLight(0xffd0f0, 0.35);
  rim.position.set(0, -6, -10); scene.add(rim);

  // Bottom fill (prevents total black underside)
  const bot = new THREE.DirectionalLight(0xdde8ff, 0.25);
  bot.position.set(0, -10, 5); scene.add(bot);

  // ── SPHERE GEOMETRY — high poly for smooth look ──
  const geo = new THREE.SphereGeometry(1, 64, 64);

  // ── CREATE BALLS ──
  const balls = TECHS.map((tech, i) => {
    // Build canvas texture
    const cvTex  = makeTexture(tech);
    const tex    = new THREE.CanvasTexture(cvTex);
    tex.needsUpdate = true;

    const mat = new THREE.MeshStandardMaterial({
      map:       tex,
      roughness: 0.12,   // low roughness = more shine
      metalness: 0.05,
      envMapIntensity: 1,
    });

    const r    = 0.85 + Math.random() * 0.5; // varied sizes like in video
    const mesh = new THREE.Mesh(geo, mat);
    mesh.scale.setScalar(r);

    // Spread in a loose cluster — like in video (horizontal spread)
    const col   = i % 6;
    const row   = Math.floor(i / 6);
    mesh.position.set(
      (col - 2.5) * 2.6 + (Math.random() - .5) * 1.2,
      (1 - row)   * 2.4 + (Math.random() - .5) * 1.0,
      (Math.random() - .5) * 3
    );

    mesh.userData = {
      r,
      vx: (Math.random() - .5) * .018,
      vy: (Math.random() - .5) * .018,
      vz: (Math.random() - .5) * .008,
      rotX: (Math.random() - .5) * .006,
      rotY: (Math.random() - .5) * .006,
      baseX: mesh.position.x,
      baseY: mesh.position.y,
    };

    scene.add(mesh);
    return mesh;
  });

  // ── RESIZE ──
  function resize() {
    const W = canvas.clientWidth;
    const H = canvas.clientHeight || 600;
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  // ── MOUSE ──
  let mx = 0, my = 0;
  window.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth)  * 2 - 1;
    my = (e.clientY / window.innerHeight) * 2 - 1;
  });

  // ── PHYSICS: keep balls separated ──
  function separate() {
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        const a = balls[i], b = balls[j];
        const dx = b.position.x - a.position.x;
        const dy = b.position.y - a.position.y;
        const dz = b.position.z - a.position.z;
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz) || .001;
        const minD = a.userData.r + b.userData.r + .08;
        if (dist < minD) {
          const ov = (minD - dist) * .5;
          const nx = dx/dist, ny = dy/dist, nz = dz/dist;
          a.position.x -= nx*ov*.5; a.position.y -= ny*ov*.5; a.position.z -= nz*ov*.5;
          b.position.x += nx*ov*.5; b.position.y += ny*ov*.5; b.position.z += nz*ov*.5;
          // velocity bounce
          const rv = (a.userData.vx - b.userData.vx)*nx
                   + (a.userData.vy - b.userData.vy)*ny;
          if (rv > 0) {
            a.userData.vx -= rv*nx*.4; a.userData.vy -= rv*ny*.4;
            b.userData.vx += rv*nx*.4; b.userData.vy += rv*ny*.4;
          }
        }
      }
    }
  }

  // ── ANIMATION LOOP ──
  function animate() {
    requestAnimationFrame(animate);

    balls.forEach(m => {
      const d = m.userData;

      // gentle float toward their resting cluster position
      const tdx = d.baseX - m.position.x;
      const tdy = d.baseY - m.position.y;
      d.vx += tdx * .004;
      d.vy += tdy * .004;

      // subtle mouse influence (camera sway, not ball movement)
      // balls gently shift opposite to mouse
      d.vx += mx * .0008;
      d.vy -= my * .0008;

      // damping
      d.vx *= .96; d.vy *= .96; d.vz *= .96;

      // bounds
      const lx = 9, ly = 5, lz = 4;
      if (Math.abs(m.position.x) > lx) d.vx -= Math.sign(m.position.x) * .02;
      if (Math.abs(m.position.y) > ly) d.vy -= Math.sign(m.position.y) * .02;
      if (Math.abs(m.position.z) > lz) d.vz -= Math.sign(m.position.z) * .02;

      m.position.x += d.vx;
      m.position.y += d.vy;
      m.position.z += d.vz;

      // slow spin on each ball
      m.rotation.x += d.rotX;
      m.rotation.y += d.rotY;
    });

    separate();

    // subtle camera sway with mouse
    camera.position.x += (mx * 1.5 - camera.position.x) * .04;
    camera.position.y += (-my * 0.8 - camera.position.y) * .04;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  animate();
}