const shuffle = (array: any) => { 
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
        array[i].answers && shuffle(array[i].answers)
        array[j].answers && shuffle(array[j].answers)
    }
    return array; 
};

export default shuffle
