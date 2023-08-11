
       //create table with pagination
       var table= new DataTable('#example', {
        fixedColumns: {
            left: 4
        },
        paging: true,
        scrollX: true
    });



    // Handle click on "Select all" control
    var is_checked=false;
    $('#select-all').on('click', function(){
    // Get all rows with search applied
        var rows = table.rows({ 'search': 'applied' }).nodes();

            if(is_checked){
                for(let i=0;i< rows.length;i++){
                   // uncheck checkboxes for all rows in the table

                    $(rows[i]).find("td input.form-check-input").removeAttr("checked",)

                }
                is_checked=false;
            
            }
            else{
                for(let i=0;i< rows.length;i++){
                    // Check checkboxes for all rows in the table

                    $(rows[i]).find("td input.form-check-input").attr("checked","checked");
                }
                is_checked=true;
            

            }
            
    });
    // change words from english to arabic in table
  document.addEventListener("click",change_From_english);
  window.addEventListener("load",change_From_english);
  let num_of_displayed_rows=document.querySelector("#example_length")

  function change_From_english(){
    
    let search_lable=document.querySelector("#example_filter label");
    search_lable.innerHTML=`بحث <input type="search" class="" placeholder="" aria-controls="example">`;


    let num_of_displayed_rows_from_total_rows =document.querySelector("#example_info");
    num_of_displayed_rows_from_total_rows.innerHTML=num_of_displayed_rows_from_total_rows.innerHTML.replace("Showing","عرض").replace("entries","مدخلا").replace("to","إلي").replace("of","من أصل")


        let Pagination_next_button=document.querySelector("#example_next");
        Pagination_next_button.innerHTML=
          `النالي <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1784 3.08113C12.5131 3.41586 12.5131 3.95858 12.1784 4.29331L7.64159 8.83008L12.1784 13.3668C12.5131 13.7016 12.5131 14.2443 12.1784 14.579C11.8436 14.9138 11.3009 14.9138 10.9662 14.579L5.82332 9.43617C5.48858 9.10143 5.48858 8.55872 5.82332 8.22399L10.9662 3.08113C11.3009 2.74639 11.8436 2.74639 12.1784 3.08113Z" fill="#98A9BC"/>
        </svg>`;
        let Pagination_prev_button=document.querySelector("#example_previous");
        Pagination_prev_button.innerHTML=
          ` <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.82332 4.08113C6.15805 3.74639 6.70077 3.74639 7.0355 4.08113L12.1784 9.22399C12.5131 9.55872 12.5131 10.1014 12.1784 10.4362L7.0355 15.579C6.70077 15.9138 6.15805 15.9138 5.82332 15.579C5.48858 15.2443 5.48858 14.7016 5.82332 14.3668L10.3601 9.83008L5.82332 5.29331C5.48858 4.95858 5.48858 4.41586 5.82332 4.08113Z" fill="#98A9BC"/>
            </svg>رجوع`;
  }

