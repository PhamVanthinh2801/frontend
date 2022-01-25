import Link from "next/link";
const Footer = () => {
  return (
    <div
      style={{
        borderTop: "solid 1px gray",
        marginTop: "10px",
        backgroundColor: "#20B2AA",
      }}
      className='flex flex-col flex-wrap p-10  m-auto mt-10'
    >
      <div style={{ margin: "auto", padding: "10px" }}>
        <p className='text-[#000000] text-center text-2xl font-medium pb-2 cursor-pointer hover:text-red-700'>
          Việt KA TV: Chuyên sản xuất các chương trình Audio & Video.
          <br /> Tổ chức sự kiện chuyên nghiệp.
          <br /> Live streaming HD Video.
        </p>
        <Link href='https://maps.app.goo.gl/nKKtS91qrD6Pu5qh7'>
          <p className='text-[#000000] text-center text-xl font-medium pb-2 cursor-pointer hover:text-red-700'>
            Địa chỉ: 67/9 Ba Mươi Tháng Tư, Trung Dũng, Thành phố Biên Hòa, Đồng
            Nai
          </p>
        </Link>

        <p className='text-[#000000] text-center text-2xl font-medium pb-2 cursor-pointer'>
          Phone: 098 394 79 69
        </p>
      </div>

      <div className='flex justify-center pb-5 '>
        <div className='m-2  h-8 w-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <Link href='https://www.facebook.com/vietkatv/'>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1642658891/7_pyjclz.jpg'
              width={54}
              height={54}
              style={{ borderRadius: "12px" }}
            />
          </Link>
        </div>
        <div className='m-2 h-8 w-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <Link href='https://www.youtube.com/c/VietKATV'>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1642658773/6_o4xviq.png'
              width={54}
              height={54}
              style={{ borderRadius: "12px" }}
            />
          </Link>
        </div>
        <div className='m-2 h-8 w-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <img
            src='https://res.cloudinary.com/hiname/image/upload/v1642658658/4_uxa405.jpg'
            width={54}
            height={54}
            style={{ borderRadius: "12px" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
