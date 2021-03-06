import React from 'react';
import TabList from '../../molecules/TabList/TabList';
import DisplaySection from '../DisplaySection/DisplaySection';
import SelectorSection from '../SelectorSection/SelectorSection';
import SaveFavouriteButton from '../../atoms/SaveFavouriteButton/SaveFavouriteButton';
import ShowFavouriteButton from '../../atoms/ShowFavouriteButton/ShowFavouriteButton';
import './MainPage.css';

//Functional component combining all the page contnent using their respective components
//Takes in the neccesary props and passing them to the components requiring those props
const MainPage = ({
  category,
  selectedTab,
  setSelectedTab,
  mediaCategories,
  selectedSound,
  selectedImage,
  selectedText,
  setSelectedSound,
  setSelectedImage,
  setSelectedText,
  onSaveFavourite,
  onShowFavourite
}) => {
  return (
    <div className="main-page">
      <div className="vertical-main">
        <TabList
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
          category={category}
        />
        <DisplaySection
          selectedTab={selectedTab}
          selectedText={selectedText}
          selectedImage={selectedImage}
          selectedSound={selectedSound}
        />
      </div>
      <div className="vertical-main">
        <SelectorSection
          mediaCategories={mediaCategories}
          selectedSound={selectedSound}
          selectedImage={selectedImage}
          selectedText={selectedText}
          setSelectedSound={setSelectedSound}
          setSelectedImage={setSelectedImage}
          setSelectedText={setSelectedText}
        />
        <div className="storage-buttons">
          <SaveFavouriteButton onSaveFavourite={onSaveFavourite} />
          <ShowFavouriteButton onShowFavourite={onShowFavourite} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
