/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { CgChevronDoubleRight } from "react-icons/cg";

const CardInventory = () => {
  return (
    <div className="grid grid-cols-4 py-5">
      <div className="col-span-1 CardInventory text-center mx-5">
        <div className="flex justify-center pt-3">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.4163 22.0007C39.4163 32.1259 32.1249 39.4173 21.9997 39.4173C11.8745 39.4173 4.58301 32.1259 4.58301 22.0007C4.58301 11.8754 11.8745 4.58398 21.9997 4.58398C32.1249 4.58398 39.4163 11.8754 39.4163 22.0007Z"
              stroke="#22202A"
              stroke-width="2.2"
            />
            <path
              d="M18.7366 14.2487C18.5622 14.6698 18.5622 15.2037 18.5622 16.2715V18.5032C18.5622 18.5314 18.5622 18.5456 18.5534 18.5544C18.5446 18.5632 18.5305 18.5632 18.5022 18.5632H16.2705C15.2027 18.5632 14.6688 18.5632 14.2477 18.7376C13.6862 18.9702 13.24 19.4163 13.0075 19.9778C12.833 20.399 12.833 20.9329 12.833 22.0007C12.833 23.0684 12.833 23.6023 13.0075 24.0235C13.24 24.585 13.6862 25.0311 14.2477 25.2637C14.6688 25.4382 15.2027 25.4382 16.2705 25.4382H18.5022C18.5305 25.4382 18.5446 25.4382 18.5534 25.4469C18.5622 25.4557 18.5622 25.4699 18.5622 25.4982V27.7298C18.5622 28.7976 18.5622 29.3315 18.7366 29.7526C18.9692 30.3142 19.4153 30.7603 19.9769 30.9929C20.398 31.1673 20.9319 31.1673 21.9997 31.1673C23.0675 31.1673 23.6013 31.1673 24.0225 30.9929C24.584 30.7603 25.0301 30.3142 25.2627 29.7526C25.4372 29.3315 25.4372 28.7976 25.4372 27.7298V25.4982C25.4372 25.4699 25.4372 25.4557 25.446 25.4469C25.4547 25.4382 25.4689 25.4382 25.4972 25.4382H27.7288C28.7966 25.4382 29.3305 25.4382 29.7517 25.2637C30.3132 25.0311 30.7593 24.585 30.9919 24.0235C31.1663 23.6023 31.1663 23.0684 31.1663 22.0007C31.1663 20.9329 31.1663 20.399 30.9919 19.9778C30.7593 19.4163 30.3132 18.9702 29.7517 18.7376C29.3305 18.5632 28.7966 18.5632 27.7288 18.5632H25.4972C25.4689 18.5632 25.4547 18.5632 25.446 18.5544C25.4372 18.5456 25.4372 18.5314 25.4372 18.5032V16.2715C25.4372 15.2037 25.4372 14.6698 25.2627 14.2487C25.0301 13.6871 24.584 13.241 24.0225 13.0084C23.6013 12.834 23.0675 12.834 21.9997 12.834C20.9319 12.834 20.398 12.834 19.9769 13.0084C19.4153 13.241 18.9692 13.6871 18.7366 14.2487Z"
              stroke="#22202A"
              stroke-width="2.2"
            />
          </svg>
        </div>
        <div className="text-xl font-bold">298</div>
        <div className="pb-3">Medicines Available</div>
        <div className="flex justify-center items-center w-full button-Inventory">
        <button className="flex justify-center items-center">
          View Full List <div className="text-xl"> <CgChevronDoubleRight /> </div>
        </button>
      </div>
      </div>
      <div className="col-span-1 CardInventory text-center mx-5">
        <div className="flex justify-center pt-3">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.7663 11.7453C37.7651 11.3913 37.5707 11.0489 37.2667 10.8653L30.5041 6.89361C30.1945 6.71182 29.8124 6.71226 29.4945 6.87893C24.9598 9.25626 19.4181 9.25512 14.8843 6.87553C14.5699 6.71052 14.1925 6.70802 13.8844 6.88445L7.09938 10.7697C6.79533 10.9532 6.60093 11.2956 6.59979 11.6496C6.56277 22.2689 12.3887 32.3159 21.5874 37.6074C21.9496 37.8156 22.4165 37.8156 22.7787 37.6074C31.9482 32.3326 37.7692 22.331 37.7663 11.7453Z" stroke="#22202A" stroke-width="2.2" stroke-miterlimit="10"/>
<path d="M19.9001 14.9239C19.778 15.2187 19.778 15.5924 19.778 16.3398V17.867C19.778 17.9033 19.778 17.9215 19.7667 17.9327C19.7554 17.944 19.7373 17.944 19.701 17.944H18.1738C17.4264 17.944 17.0527 17.944 16.7579 18.0661C16.3648 18.2289 16.0525 18.5412 15.8897 18.9343C15.7676 19.2291 15.7676 19.6028 15.7676 20.3503C15.7676 21.0977 15.7676 21.4714 15.8897 21.7662C16.0525 22.1593 16.3648 22.4716 16.7579 22.6344C17.0527 22.7565 17.4264 22.7565 18.1738 22.7565H19.701C19.7373 22.7565 19.7554 22.7565 19.7667 22.7678C19.778 22.7791 19.778 22.7972 19.778 22.8335V24.3607C19.778 25.1081 19.778 25.4818 19.9001 25.7766C20.0629 26.1697 20.3752 26.482 20.7683 26.6448C21.0631 26.7669 21.4368 26.7669 22.1842 26.7669C22.9317 26.7669 23.3054 26.7669 23.6002 26.6448C23.9933 26.482 24.3056 26.1697 24.4684 25.7766C24.5905 25.4818 24.5905 25.1081 24.5905 24.3607V22.8335C24.5905 22.7972 24.5905 22.7791 24.6018 22.7678C24.613 22.7565 24.6312 22.7565 24.6675 22.7565H26.1947C26.9421 22.7565 27.3158 22.7565 27.6106 22.6344C28.0037 22.4716 28.316 22.1593 28.4788 21.7662C28.6009 21.4714 28.6009 21.0977 28.6009 20.3503C28.6009 19.6028 28.6009 19.2291 28.4788 18.9343C28.316 18.5412 28.0037 18.2289 27.6106 18.0661C27.3158 17.944 26.9421 17.944 26.1947 17.944H24.6675C24.6312 17.944 24.613 17.944 24.6018 17.9327C24.5905 17.9215 24.5905 17.9033 24.5905 17.867V16.3398C24.5905 15.5924 24.5905 15.2187 24.4684 14.9239C24.3056 14.5308 23.9933 14.2185 23.6002 14.0557C23.3054 13.9336 22.9317 13.9336 22.1842 13.9336C21.4368 13.9336 21.0631 13.9336 20.7683 14.0557C20.3752 14.2185 20.0629 14.5308 19.9001 14.9239Z" stroke="#22202A" stroke-width="2.2"/>
</svg>

        </div>
        <div className="text-xl font-bold">02</div>
        <div className="pb-3">Medicine Groups</div>
        <div className="flex justify-center items-center w-full button-Inventory">
        <button className="flex justify-center items-center">
          View Full List <div className="text-xl"> <CgChevronDoubleRight /> </div>
        </button>
      </div>
      </div>
      <div className="col-span-1 CardInventory text-center mx-5">
        <div className="flex justify-center pt-3">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.6999 32.3281L25.6694 6.22543C25.2938 5.58592 24.7576 5.05568 24.114 4.68725C23.4703 4.31882 22.7415 4.125 21.9999 4.125C21.2582 4.125 20.5295 4.31882 19.8858 4.68725C19.2422 5.05568 18.706 5.58592 18.3304 6.22543L3.29989 32.3281C2.9385 32.9466 2.74805 33.6501 2.74805 34.3665C2.74805 35.0829 2.9385 35.7864 3.29989 36.405C3.67068 37.0483 4.20596 37.5815 4.85082 37.9496C5.49568 38.3178 6.22689 38.5078 6.96942 38.5001H37.0304C37.7723 38.5072 38.5028 38.3169 39.147 37.9488C39.7912 37.5806 40.326 37.0478 40.6965 36.405C41.0584 35.7867 41.2494 35.0834 41.25 34.367C41.2506 33.6506 41.0608 32.9469 40.6999 32.3281ZM38.316 35.0282C38.185 35.2518 37.9968 35.4364 37.7709 35.5633C37.545 35.6901 37.2894 35.7546 37.0304 35.7501H6.96942C6.71037 35.7546 6.45478 35.6901 6.22886 35.5633C6.00295 35.4364 5.81483 35.2518 5.6838 35.0282C5.56511 34.8273 5.5025 34.5982 5.5025 34.3648C5.5025 34.1314 5.56511 33.9023 5.6838 33.7014L20.7143 7.59871C20.8479 7.37625 21.0369 7.19218 21.2628 7.06439C21.4887 6.93659 21.7438 6.86943 22.0033 6.86943C22.2629 6.86943 22.518 6.93659 22.7439 7.06439C22.9697 7.19218 23.1587 7.37625 23.2924 7.59871L38.3229 33.7014C38.4405 33.9029 38.5019 34.1324 38.5007 34.3657C38.4995 34.5991 38.4357 34.8279 38.316 35.0282ZM20.6249 24.7501V17.8751C20.6249 17.5104 20.7698 17.1607 21.0276 16.9028C21.2855 16.645 21.6352 16.5001 21.9999 16.5001C22.3646 16.5001 22.7143 16.645 22.9722 16.9028C23.23 17.1607 23.3749 17.5104 23.3749 17.8751V24.7501C23.3749 25.1148 23.23 25.4645 22.9722 25.7224C22.7143 25.9802 22.3646 26.1251 21.9999 26.1251C21.6352 26.1251 21.2855 25.9802 21.0276 25.7224C20.7698 25.4645 20.6249 25.1148 20.6249 24.7501ZM24.0624 30.9376C24.0624 31.3455 23.9414 31.7443 23.7148 32.0835C23.4882 32.4227 23.166 32.687 22.7892 32.8431C22.4123 32.9992 21.9976 33.0401 21.5975 32.9605C21.1974 32.8809 20.8299 32.6845 20.5415 32.396C20.253 32.1076 20.0566 31.7401 19.977 31.34C19.8974 30.9399 19.9383 30.5252 20.0944 30.1483C20.2505 29.7715 20.5149 29.4493 20.854 29.2227C21.1932 28.9961 21.592 28.8751 21.9999 28.8751C22.5469 28.8751 23.0715 29.0924 23.4583 29.4792C23.8451 29.866 24.0624 30.3906 24.0624 30.9376Z" fill="#22202A"/>
</svg>

        </div>
        <div className="text-xl font-bold">01</div>
        <div className="pb-3">Medicine Shortage</div>
        <div className="flex justify-center items-center w-full button-Inventory">
        <button className="flex justify-center items-center">
          View Full List <div className="text-xl"> <CgChevronDoubleRight /> </div>
        </button>
      </div>
      </div>
    </div>
  );
};

export default CardInventory;