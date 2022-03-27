export const modalVariants = {
    start: {    
      opacity: 0,
    },   
    end: {
      opacity: 1,
      transition: {
          when: 'beforeChildren',
      }
    },
    close: {
        opacity: 0,
        transition: {
            when: 'afterChildren'
        }
    } 
  }

  export const modalInnerVariants = {
    start: {
        y: -300,
        opacity: 0,
    },
    end: {
        y: 0,
        opacity: 1,
    },
    close: {
        opacity: 0,
        y: 300,
    },
  }  

  