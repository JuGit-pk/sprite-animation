const controls = document.getElementById("controls");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;

let currentAnimation = "idle";
let currentFrameX = 0;
let currentFrameY = 0;
let currentFrame = 0;
const framesPerUpdate = 5;
const animationState = [
  {
    name: "idle",
    frames: 7,
    y: 0,
  },
  {
    name: "jump",
    frames: 7,
    y: 1,
  },
  {
    name: "fall",
    frames: 7,
    y: 2,
  },
  {
    name: "run",
    frames: 9,
    y: 3,
  },
  {
    name: "dizzy",
    frames: 11,
    y: 4,
  },
  {
    name: "sit",
    frames: 4,
    y: 5,
  },
  {
    name: "roll",
    frames: 7,
    y: 6,
  },
  {
    name: "bite",
    frames: 7,
    y: 7,
  },
  {
    name: "ko",
    frames: 12,
    y: 8,
  },
  {
    name: "gethit",
    frames: 4,
    y: 9,
  },
];
controls.addEventListener("change", (e) => {
  currentAnimation = e.target.value;
  currentFrameX =
    animationState.find((sprite) => sprite.name === currentAnimation).x *
    SPRITE_WIDTH;
  currentFrameY = animationState.find(
    (sprite) => sprite.name === currentAnimation
  ).y;
});

const image = new Image();
// 6876 × 5230
image.src = "../assets/shadow_dog.png";
const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  const { frames, y } = animationState.find(
    (sprite) => sprite.name === currentAnimation
  );
  const position = Math.floor(currentFrame / framesPerUpdate) % frames;

  ctx.drawImage(
    image,
    position * SPRITE_WIDTH,
    y * SPRITE_HEIGHT,
    SPRITE_WIDTH,
    SPRITE_HEIGHT,
    0,
    0,
    SPRITE_WIDTH,
    SPRITE_HEIGHT
  );

  currentFrame++;
  requestAnimationFrame(animate);
};

animate();
