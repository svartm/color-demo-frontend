# Color Demo App Frontend
A simple frontend for a color game demo project.
Deployed at: https://colorgame.oexi.cloud/

Main technologies used are [preact](https://preactjs.com/) and [vite](https://vitejs.dev/). A dockerized nginx web server is serving the static production build on an ec2 instance.

### Game Hint
Only "web-safe" colors are generated, so most are guessable within a few tries by using values 00, 33, 66, 99, aa, cc, or ff for each channel.
