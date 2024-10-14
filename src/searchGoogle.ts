export const googleSearch = (word: string, element: string) => {
    const newWord = word.toLowerCase().split('');
    const newElement = element.toLowerCase();
    const lenElement = element.length;
    let integrateLetters = '';
    let k = 0;
    for (let i = 0; i < newWord.length; i++)
    {
        for (let counter = 0; counter < lenElement; counter++)
        {
            if (k < newWord.length)
            {   
                integrateLetters += newWord[k];
                k++;
                if (integrateLetters === newElement)
                {
                    return true;
                }
            }
           
        }
        integrateLetters = ''
        k = i + 1;   
        
    }
   
}