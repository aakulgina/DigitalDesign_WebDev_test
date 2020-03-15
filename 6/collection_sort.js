function collectionSort(collection) {
    var groups = []
    for (var element of collection) {
        var existingGroups = groups.filter(group => (group.id == element.user.id) && (group.name == element.user.name))
        if (existingGroups.length > 0) {
            existingGroups[0].posts.push({id: element.id, title: element.title, text: element.text})
        }
        else {
            var newGroup = {id: element.user.id,
                            name: element.user.name,
                            posts: [{id: element.id,
                                    title: element.title,
                                    text: element.text}]}
            groups.push(newGroup)
        }
    }
    return groups
}
