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
        return length        
    }

    const head = () => {
        if (list.head){
            console.log(list.head)
            return list.head
        }
        else{
            console.log("There is no head!")
        }
    }

    const tail = () => {
        if (!list.head){
            console.log("There is no tail!")
        }
        else{
            let currentNode = list.head
            while (currentNode.nextNode){
                currentNode = currentNode.nextNode
            }
            const tail = currentNode
            console.log(tail)
            return tail
        }
    }

    const at = (index) => {
        let currentNode = list.head
        for (let i=0; i < index; i++){
            currentNode = currentNode.nextNode
        }
        console.log(currentNode)
        return currentNode
    }
    
    const pop = () => {
        let currentNode = list.head
        let currentIndex = 0
        while (currentIndex < length-2){
            currentNode = currentNode.nextNode
            currentIndex++
        }
        currentNode.nextNode = null
    }

    const contains = (value) => {
        let doesContain = false
        let currentNode = list.head
        while (currentNode){
            if (currentNode.value === value){
                doesContain = true
            }
            currentNode = currentNode.nextNode
        }
        console.log(doesContain)
        return doesContain
    }

    const find = (value) => {
        let currentIndex = 0
        let currentNode = list.head
        while (currentNode){
            if (currentNode.value === value){
                console.log("Index is " + currentIndex)
                return currentIndex
            }
            currentIndex++
            currentNode = currentNode.nextNode
        }
        return null
    }

    const toString = () => {
        let string = ""
        let currentNode = list.head
        while(currentNode){
            string += currentNode.value
            string += " => "
            currentNode = currentNode.nextNode
        }
        string += null
        console.log(string)
        return string
    }

    const insertAt = (value, index) => {
        if (index === 0){
            prepend(value)
        }
        else{
            let currentNode = list.head
            let currentIndex = 0
            while(currentIndex < index-1){
                currentNode = currentNode.nextNode
                currentIndex++
            }
            const newNode = nodeFactory(value, currentNode.nextNode)
            currentNode.nextNode = newNode
    }
        }
        
    return {list, append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt};
}


const nodeFactory = (value, nextNode) => {
    return {value, nextNode};
}


const list = linkedListFactory({})
list.append(120)
list.append(140)
list.prepend(8)
list.append(4)
list.append(12)
list.size()
list.head()
list.tail()
list.at(3)
list.pop()
list.contains(27)
list.contains(4)
list.find(140)
list.find(32)
list.toString()
list.insertAt(27, 3)
list.toString()