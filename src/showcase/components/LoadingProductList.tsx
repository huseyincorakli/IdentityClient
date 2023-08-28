const LoadingProductList = () => {
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
          <thead className='ltr:text-left rtl:text-right'>
            <tr>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                Name
              </th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                Stock
              </th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                Price
              </th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                <a
                  href='#'
                  className='inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700'
                >
                  Add Product
                </a>
              </th>
              <th className='px-4 py-2'></th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center'>
                loading...
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700 text-center'>
                loading...
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700 text-center'>
                loading...
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-center'>
                <a
                  href='#'
                  className='inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700'
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center'>
                loading...
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700 text-center'>
                loading...
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700 text-center'>
                loading...
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-center'>
                <a
                  href='#'
                  className='inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700'
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center'>
                loading...
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700 text-center'>
                loading...
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700 text-center'>
                loading...
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-center'>
                <a
                  href='#'
                  className='inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700'
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center'>
                loading...
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700 text-center'>
                loading...
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700 text-center'>
                loading...
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-center'>
                <a
                  href='#'
                  className='inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700'
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LoadingProductList
