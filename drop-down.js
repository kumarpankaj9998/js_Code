<div class="dropdown" style={{ position: "relative", left: "15vw" }}>
            <button class="btn btn-outline-secondary dropdown-toggle btn-sm" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" style={{ borderRadius: "25vh" }}>
              Collection
            </button>
            <ul class="dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton2">
              <div>{collectionData.length > 0 ? (
                collectionData.map((item) => (
                  <div>
                    <a
                      class="dropdown-item"
                      role="button"
                      onClick={() => filterByCollection(item.id)}
                    >
                      {item.type}
                    </a>
                  </div>
                ))
              ) : (
                <div>
                  <a class="dropdown-item" href="#">
                    No data
                  </a>
                </div>
              )}
              </div>


            </ul>
          </div>