const MatchUsers = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" h-[80%] w-[80%]">
        <ul role="list" class="divide-y divide-gray-100">
          <li class="flex justify-between gap-x-6 py-5">
            <div class="flex min-w-0 gap-x-4">
              <div class="min-w-0 flex-auto p-8">
                <p>Name</p>
              </div>
              <div class="min-w-0 flex-auto px-8">
                <p>Phone Number</p>
              </div>
              <div class="min-w-0 flex-auto px-8">
                <p>Source</p>
              </div>
              <div class="min-w-0 flex-auto px-8">
                <p>Destination</p>
              </div>
            </div>
          </li>

          <li class="flex justify-between gap-x-6 py-5">
            <div class="flex min-w-0 gap-x-4">
              <div class="min-w-0 flex-auto p-8">
                <p>Name</p>
              </div>
              <div class="min-w-0 flex-auto p-8">
                <p>Phone Number</p>
              </div>
              <div class="min-w-0 flex-auto p-8">
                <p>Source</p>
              </div>
              <div class="min-w-0 flex-auto p-8">
                <p>Destination</p>
              </div>
            </div>
          </li>

          <h2>Matching Users</h2>

          <li class="flex justify-between gap-x-6 py-5">
            <div class="flex min-w-0 gap-x-4">
              <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">
                  Leslie Alexander
                </p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                  leslie.alexander@example.com
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MatchUsers;
