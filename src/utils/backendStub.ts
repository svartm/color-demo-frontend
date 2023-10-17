export const backendStub = async (data:string) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(data === '#00ff00' ? 'Correct!' : 'Try again!');      
    }, 500);
  });
};
