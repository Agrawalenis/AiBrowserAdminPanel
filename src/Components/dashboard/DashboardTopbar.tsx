import Topbar from "../layout/Topbar";




const DashboardTopbar: React.FC = () => {
    


  return(
    <>
    <div>
     <Topbar 
          title={
            <div className="w-[140px] font-semibold text-[20px] leading-6 text-[#16151C]">
            Hello User👋🏻
            </div>
          } 
          subtitle="Good Morning"
          subtitleClassName="font-light text-[14px] leading-6 text-[#9CA3AF]"
      />
      </div>


  </>
  )
};

export default DashboardTopbar;
