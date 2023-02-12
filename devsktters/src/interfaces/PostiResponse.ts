
export interface ListPostis {
    postis: Posti[]
}

export interface Posti {
    id:          String,
    title:       String,
    content:     String,
    tags:        string[],
    author:      String,
    isPosted:    Boolean,
    avatarImg:   string,
    date:        string,
    likes:       number
}