<script>
  import Body from "$lib/Body.svelte";
  import Post from "$lib/Post.svelte";
  import AboutUs from "$lib/AboutUs.svelte";
</script>

<Body>
  <div slot="left">
    <Post
      isDetailView={false}
      content={`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Animi excepturi aperiam recusandae deserunt, dolor, 
        reiciendis velit, perspiciatis tenetur asperiores vero debitis. 
        Officia accusantium iure iusto enim? Magnam dicta autem vero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Animi excepturi aperiam recusandae deserunt, dolor, 
        reiciendis velit, perspiciatis tenetur asperiores vero debitis. 
        Officia accusantium iure iusto enim? Magnam dicta autem vero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Animi excepturi aperiam recusandae deserunt, dolor, 
        reiciendis velit, perspiciatis tenetur asperiores vero debitis. 
        Officia accusantium iure iusto enim? Magnam dicta autem vero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Animi excepturi aperiam recusandae deserunt, dolor, 
        reiciendis velit, perspiciatis tenetur asperiores vero debitis. 
        Officia accusantium iure iusto enim? Magnam dicta autem vero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Animi excepturi aperiam recusandae deserunt, dolor, 
        reiciendis velit, perspiciatis tenetur asperiores vero debitis. 
        Officia accusantium iure iusto enim? Magnam dicta autem vero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Animi excepturi aperiam recusandae deserunt, dolor, 
        reiciendis velit, perspiciatis tenetur asperiores vero debitis. 
        Officia accusantium iure iusto enim? Magnam dicta autem vero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Animi excepturi aperiam recusandae deserunt, dolor, 
        reiciendis velit, perspiciatis tenetur asperiores vero debitis. 
        Officia accusantium iure iusto enim? Magnam dicta autem vero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Animi excepturi aperiam recusandae deserunt, dolor, 
        reiciendis velit, perspiciatis tenetur asperiores vero debitis. 
        Officia accusantium iure iusto enim? Magnam dicta autem vero.
    `}
    />
  </div>
  <div slot="right">
    <AboutUs />
  </div>
</Body>
