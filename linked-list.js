const linkedListFactory = (list) => {
    const append = (value) => {
        if (!list.head){
            list.head = nodeFactory(value, null)
        }
        else{
            let currentNode = list.head
            while (currentNode.nextNode){
                currentNode = currentNode.nextNode
            }
            const newNode = nodeFactory(value, null)
            currentNode.nextNode = newNode
        }
    }
    
    const prepend = (value) => {
        if (!list.head){
            list.head = nodeFactory(value, null)
        }
        else{
            const newNode = nodeFactory(value, list.head)
            list.head = newNode

        }
    }
    return {list, append, prepend};
}

const nodeFactory = (value, nextNode) => {
    return {value, nextNode};
}


const list = linkedListFactory({})
list.append(120)
list.append(140)
list.prepend(8)
console.log(list.list)

