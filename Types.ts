
export interface BoundingBox {
    Width: number;
    Height: number;
    Left: number;
    Top: number;
}

export interface Polygon {
    X: number;
    Y: number;
}

export interface Geometry {
    BoundingBox: BoundingBox;
    Polygon: Polygon[];
}

export interface Relationship {
    Type: string;
    Ids: string[];
}

export interface Block {
    BlockType: string;
    Geometry: Geometry;
    Id: string;
    Relationships: Relationship[];
    Text?: string;
}

export interface DocumentMetadata {
    Pages: number;
}

export interface BlocksResponse {
    DocumentMetadata: DocumentMetadata;
    Blocks: Block[];
}