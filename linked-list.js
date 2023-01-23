const linkedListFactory = (list) => {
    let length = 0
    const append = (value) => {
        if (!list.head){
            list.head = nodeFactory(value, null)
            length++
        }
        else{
            let currentNode = list.head
            while (currentNode.nextNode){
                currentNode = currentNode.nextNode
            }
            const newNode = nodeFactory(value, null)
            currentNode.nextNode = newNode
            length++
        }
    }
    
    const prepend = (value) => {
        if (!list.head){
            list.head = nodeFactory(value, null)
            length++
        }
        else{
            const newNode = nodeFactory(value, list.head)
            list.head = newNode
            length++

        }
    }

    const size = () => {
        console.log("Length is " + length)        
    }

    const head = () => {
        if (list.head){
            console.log(list.head)
        }
        else{
            console.log("There is no head!")
        }
    }
    return {list, append, prepend, size, head};
}

const nodeFactory = (value, nextNode) => {
    return {value, nextNode};
}


const list = linkedListFactory({})
list.append(120)
list.append(140)
list.prepend(8)
list.size()
list.head()
console.log(list.list)

