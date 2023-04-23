<template>
    <div class="table__list-item row">
        <div class="table__list-cell cell">
            {{ user.userId }}
        </div>
        <div class="table__list-cell cell">
            {{ user.id }}
        </div>
        <div class="table__list-cell table__list-title cell">
            {{ user.title }}
        </div>
        <div class="table__list-cell cell">
            {{ user.completed }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TableRow',
        props: {
            user: {
                type: Object
            }
        }
    }
</script>

<style lang="scss" >
.table {

&__list-item {
}

&__list-cell {
}

&__list-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; 
    text-align: start;
}
}
.row {
}
.cell {
}

</style>