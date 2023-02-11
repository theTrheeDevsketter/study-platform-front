
export interface ListPostis {
    postis: Posti[]
}

export interface Posti {
    id:          String,
    title:       String,
    content:     String,
    tags:        String[],
    author:      String,
    isPosted:    Boolean
}