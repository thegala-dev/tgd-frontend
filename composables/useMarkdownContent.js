
export const markdownFromFile = async (collection, path) => {
    if (!collection) throw new Error('`collection` is required')
    if (!path) throw new Error('`path` is required')

    console.log(collection, path)
    const page = await queryCollection(collection).path(path).first()
    console.log(page)

    return page
}

export const markdownFromApi = async (route, data) => {
    // TODO: integrare fetch da backend
    return {
        meta: {},
        hero: {},
        content: '',
        drawer: null
    }
}

export function useMarkdownContent(){
    return {markdownFromFile, markdownFromApi}
}
