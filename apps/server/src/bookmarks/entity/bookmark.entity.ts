import { ApiProperty } from '@nestjs/swagger';

export class BookmarkEntity {
  @ApiProperty({
    example: '642ff272f68f2b39a4a6f7df',
    description: 'Bookmark unique identifier',
  })
  _id: string;

  @ApiProperty({ example: 'https://example.com', description: 'Bookmark url' })
  url: string;

  @ApiProperty({
    example: 'Bookmark description',
    description: 'Bookmark description',
  })
  description: string;

  @ApiProperty({ example: 'Bookmark tag', description: 'Bookmark tag' })
  tag: string;

  @ApiProperty({ example: 'Space', description: 'Space identifier' })
  space: string;

  @ApiProperty({ example: 'Bookmark owner', description: 'Bookmark owner' })
  owner: string;

  @ApiProperty({
    example: '2023-01-02T12:00:00Z',
    description: 'Date of bookmark creation',
  })
  createdAt: string;

  @ApiProperty({
    example: '2023-01-02T12:00:00Z',
    description: 'Date of bookmark update',
  })
  updatedAt: string;
}