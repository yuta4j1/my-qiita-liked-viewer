export type ArticleInfo = {
    uuid: string,
    title: string,
    url: string,
    userImageUrl: string,
    updateDate: string
}

export type Column = {
    categoryName: string,
    articles: ArticleInfo[]
}

export type SourceArticleInfo = {
    uuid: string,
    title: string,
    url: string,
    userImageUrl: string,
    updateDate: string,
    tagList: string[]
}