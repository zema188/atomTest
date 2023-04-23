<template>
    <div class="table container">
        <div class="table__header row">
            <div class="table__header-item cell">
                ID пользователя
            </div>
            <div class="table__header-item cell">
                ID
            </div>
            <div class="table__header-item cell">
                Заголовок
            </div>
            <div class="table__header-item cell">
                Статус
            </div>
        </div>
        <div class="table__list">
            <TableRow
            v-for="row in paginatedUsers"
            :key="row.id"
            :user="row"
            />
        </div>
        <div class="pag__list-w">
            <div class="pag__list"
            v-if="rows.length"
            >
                <div class="pag__prev pag__arrow btn"
                @click="scrollPag($event.target,-1)"
                ></div>
                <div class="pag__item btn "
                v-for="(page,index) in pages"
                :key="index"
                @click="changePage(page)"
                :class="{current: page == pageNumber}"
                >
                {{ page }}
                </div>
                <div class="pag__next pag__arrow btn"
                @click="scrollPag($event.target,1)"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>

import TableRow from '@/components/table/Table-row.vue';
    export default {
        name: 'TheTable',
        components: {
            TableRow
        },
        data() {
            return {
                rows: '',
                userPerPage: 10,
                pageNumber: 1,
            }
        },
        computed: {
            pages() {
                return Math.ceil(this.rows.length / this.userPerPage)
            },
            paginatedUsers() {
                let from = (this.pageNumber - 1) * this.userPerPage;
                let to = from + this.userPerPage
                return this.rows.slice(from, to)
            }

        },
        methods: {
            changePage(number) {
                this.pageNumber = number
            },
            scrollPag(target,side) {
                target.closest('.pag__list').scrollBy({
                    left: side*35,
                    behavior: 'smooth'
                });
            },
            changeVisiblePageNumber(number,item) {
                if(number > 0 && number <= this.pagListLength) {
                    if(item) {
                        if(number >= this.visibleLengthPages && item.classList.contains('pag__next')) {
                            if(this.visiblePageNumber == this.increasedNumber + this.visibleLengthPages) {
                                this.increasedNumber = (number-this.visibleLengthPages)
                            }
                        }
                        if((this.visiblePageNumber == this.increasedNumber +1) && item.classList.contains('pag__prev')) {
                            if(this.increasedNumber) {
                                this.increasedNumber = (this.increasedNumber)-1
                            }
                        }
                    }
                }

            },
            get_users() {
                return fetch('https://jsonplaceholder.typicode.com/todos/')
                // return fetch('https://jsonplaceholder.typicode.com/users/1/todos')
                .then(response => response.json())
                .then(data => this.rows = data)
                .catch(error => console.error('Error:', error));
            }
        },
        mounted() {
            this.get_users()
        }
    }
</script>

<style lang="scss" >
.row {
    border: 1px solid #969696;
    display: flex;
    justify-content: space-between;
    &:nth-child(even) {
        background: #bfd0ea;
    }
    &:nth-child(odd) {
        background: #c4d5ee;
    }
}
.table {
    padding: 20px 0 0 0 ;
&__header {
    &.row {
        background: #cfb7a2;
    }
}

&__header-item {

}

&__list {
    
}


&__pag-item {
}
}

.cell {
    padding: 5px;
    flex: 0 0 calc(25% - 5px);
    display: flex;
    align-items: center;
}
.pag__list-w {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
}
.pag__list {
    display: flex;
    gap: 5px;
    margin-top: 10px;
    overflow-x: auto;
    background: #779bc9;
    margin-top: 20px;
    padding: 0 30px;
    &::-webkit-scrollbar { 
        height: 0;
    }
    -ms-overflow-style: none; 
}
.pag__item {
    transition: .2s;
    min-width: 30px;
    &.current {
        background: #89bdff;
        color: #fff;
    }
}
.pag__next, .pag__prev {
    background: #779bc9;
    position: absolute;
    color: #fff;
    font-weight: 700;
    &::after {
        content: ">";
    }
}
.pag__prev {
    left: 0;
    &::after {
        transform: rotate(180deg);
    }
}
.pag__next {
    right: 0;
}

</style>