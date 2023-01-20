export default {
    props:['pagination', 'getData'],
    template:`
    <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{'disabled': !pagination.has_pre}">
        <a class="page-link" @click.prevent="getData(pagination.current_page - 1)" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      
    <li class="page-item" :class="{'active': page === pagination.current_page}" v-for="page in pagination.total_pages" :key="page + 4545">
        <span v-if="page === pagination.current_page" class="page-link"  @click.prevent="getData(page)">{{page}}</span>
        <a v-else class="page-link"  @click.prevent="getData(page)" href="#">{{page}}</a>
    </li>

      <li class="page-item" :class="{'disabled': !pagination.has_next}">
        <a class="page-link"  @click.prevent="getData(pagination.current_page + 1)" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
</nav>`
}