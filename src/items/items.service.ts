import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  private items: Array<any> = [];
  private idCounter = 1;

  create(createDto: CreateItemDto) {
    const item = { id: this.idCounter++, ...createDto };
    this.items.push(item);
    return item;
  }

  findAll() {
    return this.items;
  }

  findOne(id: number) {
    return this.items.find((it) => it.id === id);
  }

  update(id: number, updateDto: UpdateItemDto) {
    const item = this.findOne(id);
    if (!item) return null;
    Object.assign(item, updateDto);
    return item;
  }

  remove(id: number) {
    const idx = this.items.findIndex((i) => i.id === id);
    if (idx === -1) return { deleted: false };
    this.items.splice(idx, 1);
    return { deleted: true };
  }
}
