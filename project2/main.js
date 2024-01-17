import './public/main.scss';

const container = document.querySelector('#grid-cards');

const cols = 3;

const data = new Array(12);

for (let index = 0; index < data.length / cols; index++) {
    const row = document.createElement('div');
    row.classList.add('row', 'mb-30');

    let offset = index * cols;
    let take = offset + cols;
    for (let c = offset; c < take; c++) {
        row.innerHTML = row.innerHTML + `
       <div class="col">
            <div class="card p-2 rounded-0 pb-12" style="border-color: rgba(48, 47, 46, 0.70);">
                <img
                    src="./nft-image.jpg"
                    class="card-img-top rounded-0"
                    style="object-fit: cover"
                    alt="nft-image"
                    width="199"
                    height="222" />
                <div class="card-body p-0">
                    <h5 class="card-title fw-bold font-Istok fs-14 m-0" style="line-height: 34px">Без слов</h5>
                    <div class="d-flex">
                        <img src="./user.jpg" alt="user" width="48" height="48" />
                        <div class="ms-1h">
                            <p class="fs-14 lh-sm">Настя Ивлеева Вячеславовна</p>
                            <div class="d-flex align-items-center">
                                <p class="fs-11 lh-sm text-secondary">проверено</p>
                                <img
                                    src="./verify.png"
                                    alt="verify"
                                    width="14"
                                    height="14"
                                    class="flex-shrink-0 ms-1" />
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <div class="fs-14 lh-lg">Редкость:</div>
                        <div
                            class="border border-primary lh-lg d-flex justify-content-center fs-11 align-items-center px-12"
                            style="height: 21px; border-radius: 7px">
                            уникальная
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-1h">
                        <div class="fs-14 lh-lg">Цена:</div>
                        <div
                            class="bg-primary lh-lg d-flex justify-content-center fs-11 align-items-center px-3"
                            style="height: 21px; border-radius: 7px">
                            от 500 ₽
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mt-2">
                        <button
                            type="button"
                            class="btn btn-primary font-Istok text-black button_buy fs-17 lh-base py-1h px-64 mx-auto">
                            Купить
                        </button>
                    </div>
                </div>
            </div>
        </div>
       `;
    }
    container.append(row)
   
}


