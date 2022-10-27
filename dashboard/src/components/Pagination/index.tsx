import { CaretLeft, CaretRight } from "phosphor-react";

type PaginationParams = {
  currentPage: number;
  totalResults: number;
  pageSize: number;
  changeCurrentPage: (currentPage: number) => void;
}
export default function Pagination({ currentPage, totalResults, pageSize, changeCurrentPage }: PaginationParams) {
  const totalPages = Math.ceil(totalResults / pageSize);
  console.log(currentPage);
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-gray-900 px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Exibindo <span className="font-medium">{currentPage * 10 - 9}</span> até <span className="font-medium">{pageSize * currentPage}</span> de{' '}
            <span className="font-medium">{totalPages}</span> resultados
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-gray-900 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-yellow-700 focus:z-20"
              onClick={() => { currentPage > 1 && changeCurrentPage(currentPage - 2) }}
            >
              <span className="sr-only">Previous</span>
              <CaretLeft size={24} />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {
              [...Array(totalPages)].map((e, i) => {
                return (<a
                  href="#"
                  aria-current="page"
                  className={`relative z-10 inline-flex items-center border px-4 py-2 text-sm font-medium text-indigo-600 ${i + 1 === currentPage ? "bg-yellow-500" : "bg-gray-900 hover:bg-yellow-700"}   focus:z-20`}
                  onClick={() => { changeCurrentPage(i) }}
                  key={i} >
                  {i + 1
                  }
                </a>)
              })
            }

            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md border border-gray-300  px-2 py-2 text-sm font-medium text-gray-500 hover:bg-yellow-700 focus:z-20"
              onClick={() => { currentPage < totalPages && changeCurrentPage(currentPage) }}
            >
              <span className="sr-only">Next</span>
              <CaretRight size={24} />
            </a>
          </nav>
        </div>
      </div>
    </div >
  )

}