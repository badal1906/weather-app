import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../EcommerceQuery";
import CommonInput from "../../../Components/CommonInput";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CommonPopover from "../../../Components/CommonPopover";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { clearUser } from "../../../Redux/UserSlice";

const Home = () => {
  const user = useSelector((s) => s.user.user);
  const [filter, setFilter] = useState("");
  const [displayCount, setDisplayCount] = useState(6);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const { data, isLoading, isFetching } = useGetProductsQuery();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    searchProducts();
    handleClose();
  };
  const handleClear = () => {
    setCategory("");
    setPrice("");
    setRating("");
    setList(data.slice(0, displayCount));
    handleClose();
  };

  const handleViewMore = () => {
    setDisplayCount(displayCount + 6);
  };

  const searchProducts = () => {
    if (!isLoading && !isFetching && data) {
      const searchFilter = filter.toLowerCase();
      const filteredData = data.filter((product) => {
        const priceMatch = price ? product.price <= parseFloat(price) : true;
        const categoryMatch = category
          ? product.category.toLowerCase().includes(category.toLowerCase())
          : true;
        const ratingMatch = rating
          ? product.rating.rate >= parseFloat(rating)
          : true;
        const filterMatch = product.title.toLowerCase().includes(searchFilter);

        return categoryMatch && priceMatch && ratingMatch && filterMatch;
      });

      setList(
        filteredData.length > 0 ? filteredData.slice(0, displayCount) : []
      );
    }
  };

  useEffect(() => {
    if (!isLoading && !isFetching && data) {
      searchProducts();
    }
  }, [data, displayCount, isLoading, isFetching, filter]);

  // Extract unique categories
  const categories = data
    ? [...new Set(data.map((product) => product.category))]
    : [];

  const fields = [
    {
      type: "select",
      label: "Category",
      value: category,
      onChange: handleCategoryChange,
      options: categories.map((category) => ({
        value: category,
      })),
    },
    {
      type: "text",
      label: "Max Price",
      value: price,
      onChange: handlePriceChange,
    },
    {
      type: "text",
      label: "Min Rating",
      value: rating,
      onChange: handleRatingChange,
    },
  ];

  return (
    <>
      {user ? (
        <>
          <CommonInput
            name="filter"
            placeholder="Search Products"
            state={filter}
            setState={setFilter}
          />
          <IconButton onClick={handleClick}>
            <FilterAltIcon sx={{ color: "#fff" }} />
          </IconButton>
          <Button
            sx={{ ml: "5rem" }}
            onClick={() => {
              dispatch(clearUser());
            }}
          >
            Logout
          </Button>
          <CommonPopover
            open={open}
            anchorEl={anchorEl}
            handleClose={handleClose}
            fields={fields}
            onSubmit={handleSubmit}
            onClear={handleClear}
          />
          <Grid container gap={1}>
            {list.map((d, i) => (
              <Grid item xs={2} key={i} sx={{ m: "12px" }}>
                <Grid
                  component={"img"}
                  src={d.image}
                  sx={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
                <Grid>
                  <Typography>{d.title}</Typography>
                  <Typography> Rs {d.price}</Typography>
                  <Typography>Rating {d.rating.rate} </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
          {list.length > 0 && list.length < data?.length && (
            <Button onClick={handleViewMore}>View More</Button>
          )}
        </>
      ) : (
        <>
          <Navigate to={"/"} />
        </>
      )}
    </>
  );
};

export default Home;
