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
            newNode = nodeFactory(value, null)
            currentNode.nextNode = newNode
        }
    } 
    return {list, append};
}

const nodeFactory = (value, nextNode) => {
    return {value, nextNode};
}


const list = linkedListFactory({})
list.append(120)
list.append(140)
list.append(200)
console.log(list.list)

