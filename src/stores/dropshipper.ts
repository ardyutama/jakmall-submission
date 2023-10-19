import { defineStore } from "pinia";

export const useDropshipperStore = defineStore('dropshipper', {
    state: () => {
        return {
            dropshipperList: [] as DropshipperInfo[],
            dropshipper: null as DropshipperInfo | null
        }
    }
})

interface DropshipperInfo {
    name: string,
    phoneNumber: number,
    dropshipper_name: string,
    dropshipper_phoneNumber: number,
    delivery_address: string
}