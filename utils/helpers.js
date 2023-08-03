module.exports = {
    get_emoji: () => {
      const randomNum = Math.random();
      let pen = "🖍️";
  
      if (randomNum > 0.7) {
        pen = "🖌️";
      } else if (randomNum > 0.4) {
        pen = "🖊️";
      }
  
      return `<span for="img" aria-label="pen">${pen}</span>`;
    },
  };
  