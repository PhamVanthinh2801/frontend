import Link from "next/link";
export default function Nav() {
  return (
    <nav
      style={{
        borderBottom: "solid 3px green",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "960px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: "18px",
          paddingTop: "18px",
        }}
      >
        <div
          className='ml-2'
          style={{
            // border: "solid 1px red"
            borderRadius: "12px",
          }}
        >
          <Link href='/'>
            <img
              src='https://res.cloudinary.com/hiname/image/upload/v1643085483/vk_aawlju.jpg'
              width={114}
              height={104}
              style={{ cursor: "pointer", borderRadius: "12px" }}
            />
          </Link>
        </div>
        <div className='flex flex-row justify-left  w-full mr-2'>
          <Link href='/vechungtoi'>
            <p
              style={{
                color: "#8B0000",
                fontSize: "16px",
                marginLeft: "50px",
                padding: "8px",
                fontWeight: "500",
                cursor: "pointer",
                textAlign: "center",

                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "7px",
              }}
              className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'
            >
              VỀ CHÚNG TÔI
            </p>
          </Link>
          <Link href='/bangiadichvu'>
            <p
              style={{
                color: "#8B0000",
                fontSize: "16px",
                marginLeft: "35px",
                padding: "8px",
                fontWeight: "500",
                textAlign: "center",
                cursor: "pointer",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "7px",
              }}
              className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'
            >
              BẢNG GIÁ DỊCH VỤ
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
