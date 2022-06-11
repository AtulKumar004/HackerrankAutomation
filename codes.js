

module.exports = {
    answer :[

        `#include <bits/stdc++.h> 
        using namespace std;

        int main()
        {
            int number_of_element;
            cin >>number_of_element;
            vector <int> array(number_of_element);
            int sum_of_array = 0;
            for(int i = 0; i < number_of_element; i++){
                cin >> array[i];
                sum_of_array +=  array[i];
            }
            cout << sum_of_array;
            return 0;
          }`
        
          
          
          
          
    
    ]
}