export interface PoetryDto {

    id: bigint;

    title: string;

    description: string;

    imageUrl: string;

    tags: string;

    category: string;

    poetryLikesCount: bigint;

    deleted: boolean;

    createdBy: string;

    status: string;

}
